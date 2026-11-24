import { skillGroups } from "@/data/profile";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const levelLabel = { 3: "Mahir", 2: "Menengah", 1: "Dasar" } as const;

function Dots({ level }: { level: 1 | 2 | 3 }) {
  return (
    <span className="flex gap-1" aria-label={levelLabel[level]} title={levelLabel[level]}>
      {[1, 2, 3].map((n) => (
        <span key={n} className={`size-1.5 rounded-full ${n <= level ? "bg-moss" : "bg-rule"}`} />
      ))}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="keahlian" className="border-y border-rule bg-card">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 md:py-24">
        <SectionHeader index="02" title="Keahlian" sub="Titik di samping tiap teknologi menunjukkan tingkat penguasaan: dasar, menengah, mahir." />

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 100}>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-faint">{g.title}</h3>
              <ul className="divide-y divide-rule border-t border-rule">
                {g.skills.map((s) => (
                  <li key={s.name} className="flex items-center justify-between gap-4 py-2.5 text-sm">
                    <span className="font-medium">{s.name}</span>
                    <Dots level={s.level} />
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
