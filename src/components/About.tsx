import { profile } from "@/data/profile";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

/** Mengubah **teks** menjadi teks tebal. */
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith("**") ? (
          <strong key={i} className="font-semibold text-ink">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

export default function About() {
  const facts = [
    ["Lokasi", profile.location],
    ["Kampus", "Politeknik Elektronika Negeri Surabaya"],
    ["Jurusan", "Teknik Informatika, semester 5"],
    ["Bahasa", "Indonesia, Inggris"],
  ];

  return (
    <section id="tentang" className="mx-auto max-w-5xl px-5 py-20 sm:px-8 md:py-24">
      <SectionHeader index="01" title="Tentang saya" />

      <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
        <Reveal className="space-y-5 text-[1.05rem] leading-relaxed text-soft">
          {profile.about.map((p, i) => (
            <p key={i}>
              <Rich text={p} />
            </p>
          ))}
        </Reveal>

        <Reveal delay={100}>
          <dl className="divide-y divide-rule border-y border-rule">
            {facts.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[90px_1fr] gap-4 py-3.5 text-sm">
                <dt className="font-mono text-xs leading-5 text-faint">{k}</dt>
                <dd className="font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
