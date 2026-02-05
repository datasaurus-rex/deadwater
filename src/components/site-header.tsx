import Link from "next/link";

const navLinks = [
  { href: "/read", label: "Read" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="border-b border-ink-800/80">
      <div className="container-narrow flex items-center justify-between py-6">
        <Link href="/" className="heading-serif text-lg font-semibold text-white focus-ring">
          Deadwater.ai
        </Link>
        <nav className="flex items-center gap-6 text-xs uppercase tracking-[0.35em] text-slate-400">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="focus-ring transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
