export function MantisShrimpFieldGuide() {
  return (
    <section className="container-post my-10">
      <div className="overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/80">
        <div className="border-b border-ink-800 px-5 py-4 sm:px-6">
          <p className="eyebrow">Field guide</p>
          <h2 className="mt-2 text-xl font-semibold text-white">Three reasons mantis shrimp feel fake</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
            They are the kind of animal that sounds invented by a writer who needed to raise the stakes.
          </p>
        </div>

        <div className="grid gap-4 px-4 py-5 sm:px-6 sm:py-6 md:grid-cols-3">
          <div className="rounded-2xl border border-accent-blue/60 bg-ink-950/70 p-4">
            <p className="text-[11px] uppercase tracking-[0.28em] text-sky-300">Vision</p>
            <h3 className="mt-2 text-lg font-semibold text-white">Ridiculous eyes</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Independent eye stalks, specialized midbands, polarization sensitivity, and a visual system that turns out to be stranger than the popular myth.
            </p>
          </div>

          <div className="rounded-2xl border border-accent-sea/60 bg-ink-950/70 p-4">
            <p className="text-[11px] uppercase tracking-[0.28em] text-teal-300">Strike</p>
            <h3 className="mt-2 text-lg font-semibold text-white">Weaponized physics</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Spring-loaded clubs move fast enough to trigger cavitation, so the shrimp does not just hit prey. It also makes the water misbehave.
            </p>
          </div>

          <div className="rounded-2xl border border-ink-700 bg-ink-950/70 p-4">
            <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">Behavior</p>
            <h3 className="mt-2 text-lg font-semibold text-white">More tactical than random</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Smashing species do not just spam punches. They change strike location based on shell shape and keep adjusting until the geometry gives up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
