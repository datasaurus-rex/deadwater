"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/read", label: "Read" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-ink-800/80">
      <div className="container-narrow flex items-center justify-between py-6">
        <Link href="/" className="heading-serif text-lg font-semibold text-white focus-ring">
          Deadwater.ai
        </Link>
        <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.35em] text-slate-400 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="focus-ring transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="focus-ring inline-flex items-center justify-center rounded-full border border-ink-800 p-2 text-slate-300 transition hover:border-accent-blue hover:text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex h-5 w-5 flex-col items-center justify-center gap-1">
            <span className={`h-0.5 w-5 bg-current transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      {open ? (
        <div className="border-t border-ink-800/80 md:hidden">
          <div className="container-narrow flex flex-col gap-4 py-4 text-xs uppercase tracking-[0.35em] text-slate-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring transition-colors hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
