import { certifications, education, educationNote, experiences } from "@/data/profile";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

function Row({ period, children }: { period: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <div className="grid gap-2 py-6 md:grid-cols-[170px_1fr] md:gap-8">
        <p className="font-mono text-xs leading-6 text-faint">{period}</p>
        <div>{children}</div>
      </div>
    </Reveal>
  );
}

export default function EducationSection() {
  return (
    <section id="riwayat" className="border-y border-rule bg-card">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 md:py-24">
        <SectionHeader index="04" title="Riwayat" />

        <h3 className="font-mono text-xs uppercase tracking-wider text-faint">Pendidikan</h3>
        <div className="mt-2 divide-y divide-rule border-y border-rule">
          {education.map((e, i) => (
            <Row key={e.institution} period={e.period}>
              <h4 className="font-bold">
                {e.url ? (
                  <a href={e.url} target="_blank" rel="noopener noreferrer" className="link-underline">
                    {e.institution}
                  </a>
                ) : (
                  e.institution
                )}
              </h4>
              <p className="text-sm text-soft">{e.major}</p>
              {i === 0 && <p className="mt-2 text-sm leading-relaxed text-soft">{educationNote}</p>}
            </Row>
          ))}
        </div>

        <h3 className="mt-14 font-mono text-xs uppercase tracking-wider text-faint">Organisasi & kepanitiaan</h3>
        <div className="mt-2 divide-y divide-rule border-y border-rule">
          {experiences.map((e) => (
            <Row key={e.role} period={e.period}>
              <h4 className="font-bold">{e.role}</h4>
              <p className="text-sm text-moss">{e.organization}</p>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-soft">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <span className="text-faint">–</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Row>
          ))}
        </div>

        <h3 className="mt-14 font-mono text-xs uppercase tracking-wider text-faint">Sertifikasi</h3>
        <div className="mt-2 divide-y divide-rule border-y border-rule">
          {certifications.map((c) => (
            <Row key={c.name} period={c.year}>
              <h4 className="font-bold">{c.name}</h4>
              <p className="text-sm text-soft">{c.issuer}</p>
            </Row>
          ))}
        </div>
      </div>
    </section>
  );
}
