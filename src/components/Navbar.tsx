"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { CloseIcon, MenuIcon } from "./Icons";

const links = [
  { id: "tentang", label: "Tentang" },
  { id: "keahlian", label: "Keahlian" },
  { id: "project", label: "Project" },
  { id: "riwayat", label: "Riwayat" },
  { id: "kontak", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled || open ? "border-rule bg-paper/90 backdrop-blur" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 font-bold tracking-tight">
          <span className="inline-flex size-7 items-center justify-center rounded-md bg-ink font-mono text-xs text-paper">
            BW
          </span>
          {profile.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="link-underline text-sm text-soft hover:text-ink">
              {l.label}
            </a>
          ))}
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-ink px-3.5 py-2 text-sm font-medium text-paper transition-colors hover:bg-moss"
          >
            CV
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="p-2 md:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-rule bg-paper px-5 py-2 md:hidden">
          {[...links.map((l) => ({ href: `#${l.id}`, label: l.label })), { href: profile.cv, label: "Lihat CV" }].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-rule py-3 text-soft last:border-0"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
