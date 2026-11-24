import { profile } from "@/data/profile";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const links = [
    { label: "GitHub", value: profile.socials.github.label, href: profile.socials.github.href },
    { label: "LinkedIn", value: profile.socials.linkedin.label, href: profile.socials.linkedin.href },
    { label: "CV", value: "Unduh PDF", href: profile.cv },
  ];

  return (
    <section id="kontak" className="mx-auto max-w-5xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeader index="05" title="Kontak" />

      <Reveal>
        <p className="max-w-xl text-lg leading-relaxed text-soft">
          Saya sedang mencari tempat magang untuk semester 6. Kalau ada posisi yang cocok, atau ingin berdiskusi soal
          project, kirim email saja.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="link-underline mt-8 inline-block break-all text-2xl font-bold tracking-tight sm:text-4xl"
        >
          {profile.email}
        </a>
      </Reveal>

      <Reveal delay={100} className="mt-12 grid gap-px overflow-hidden rounded-lg border border-rule bg-rule sm:grid-cols-3">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between bg-card px-5 py-4 transition-colors hover:bg-moss-soft"
          >
            <span>
              <span className="block font-mono text-[11px] text-faint">{l.label}</span>
              <span className="block text-sm font-semibold">{l.value}</span>
            </span>
            <span className="text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-moss">
              ↗
            </span>
          </a>
        ))}
      </Reveal>
    </section>
  );
}
