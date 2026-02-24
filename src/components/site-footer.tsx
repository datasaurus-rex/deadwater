import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-ink-800/80">
      <Image
        src="/footer/footer.png"
        alt=""
        fill
        aria-hidden="true"
        className="object-cover object-[95%_0%] sm:object-top sm:object-center"
        sizes="100vw"
      />
      <div className="container-narrow relative z-10 flex flex-col gap-6 py-10 text-sm text-slate-300">
        <p>Deadwater.ai — Content OS for an AI-first world.</p>
        <div className="flex flex-wrap gap-6 uppercase tracking-[0.2em]">
          <Link href="/content-os" className="focus-ring transition-colors hover:text-white">
            Content OS
          </Link>
          <Link href="/other-options" className="focus-ring transition-colors hover:text-white">
            Other options
          </Link>
          <Link href="/contact" className="focus-ring transition-colors hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
