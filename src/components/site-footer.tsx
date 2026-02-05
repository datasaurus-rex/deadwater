export function SiteFooter() {
  return (
    <footer className="border-t border-ink-800/80">
      <div className="container-narrow flex flex-col gap-6 py-10 text-sm text-slate-300">
        <p>Deadwater.ai — Content OS for an AI-first world.</p>
        <div className="flex flex-wrap gap-6 uppercase tracking-[0.2em]">
          <span>LinkedIn</span>
          <span>GitHub</span>
          <span>X</span>
        </div>
      </div>
    </footer>
  );
}
