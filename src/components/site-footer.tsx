import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-ink-800/80">
      <Image
        src="/footer/footer.png"
        alt=""
        fill
        aria-hidden="true"
        className="object-cover object-top"
        sizes="100vw"
      />
      <div className="container-narrow relative z-10 flex flex-col gap-6 py-10 text-sm text-slate-300">
        <p>Deadwater.ai — Content OS for an AI-first world.</p>
        <div className="flex flex-wrap gap-6 uppercase tracking-[0.2em]">
          <a
            href="https://linkedin.com/in/jackvirag"
            className="focus-ring transition-colors hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/datasaurus-rex"
            className="focus-ring transition-colors hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
