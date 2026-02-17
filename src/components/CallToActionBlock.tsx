import Link from "next/link";

export type CallToActionButton = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export type CallToActionContent = {
  heading: string;
  body: string;
  buttons: CallToActionButton[];
};

type CallToActionBlockProps = {
  content: CallToActionContent;
  className?: string;
};

export function CallToActionBlock({ content, className }: CallToActionBlockProps) {
  return (
    <section className={`border border-ink-800 bg-ink-900/40 p-6 ${className ?? ""}`.trim()}>
      <h3 className="heading-serif text-2xl text-white">{content.heading}</h3>
      <p className="mt-2 text-slate-300">{content.body}</p>
      <div className="mt-4 flex flex-wrap gap-4">
        {content.buttons.map((button, index) => {
          const variant = button.variant ?? (index === 0 ? "primary" : "secondary");
          const classes =
            variant === "secondary"
              ? "focus-ring border border-ink-700 bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-slate-300 hover:text-white"
              : "focus-ring border border-accent-blue bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-white";

          return (
            <Link key={`${button.href}-${button.label}`} href={button.href} className={classes}>
              {button.label}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
