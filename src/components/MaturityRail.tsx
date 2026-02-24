type RailItem = {
  tier: string;
  title: string;
  points: string[];
};

type MaturityRailProps = {
  items: RailItem[];
};

export function MaturityRail({ items }: MaturityRailProps) {
  return (
    <div className="mt-6">
      <div className="hidden h-px w-full bg-gradient-to-r from-accent-blue/20 via-accent-blue/70 to-accent-sea/30 md:block" />
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {items.map((item, index) => (
          <article key={item.tier} className="relative border border-ink-800 bg-ink-900/40 p-5">
            <div className="mb-3 flex items-center gap-3">
              <span className="inline-flex h-7 min-w-7 items-center justify-center border border-accent-blue/50 px-2 text-[11px] uppercase tracking-[0.2em] text-slate-300">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.tier}</p>
            </div>
            <h3 className="heading-serif text-xl text-white">{item.title}</h3>
            <ul className="mt-4 grid gap-2 list-disc pl-5 text-slate-300">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
