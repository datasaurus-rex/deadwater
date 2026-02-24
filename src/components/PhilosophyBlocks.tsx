import type { ReactNode } from "react";

type PhilosophyItem = {
  title: string;
  body: ReactNode;
  icon?: ReactNode;
};

type PhilosophyBlocksProps = {
  items: PhilosophyItem[];
};

export function PhilosophyBlocks({ items }: PhilosophyBlocksProps) {
  return (
    <div className="mt-4 grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="relative overflow-hidden border border-ink-800 bg-ink-900/40 p-5 transition-transform duration-200 hover:-translate-y-0.5"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-transparent" />
          <div className="relative">
            <div className="text-accent-blue">{item.icon ?? <span className="inline-block h-2 w-2 rounded-full bg-accent-blue" />}</div>
            <h3 className="mt-2 heading-serif text-xl text-white">{item.title}</h3>
            <div className="mt-3 text-slate-300">{item.body}</div>
          </div>
        </article>
      ))}
    </div>
  );
}
