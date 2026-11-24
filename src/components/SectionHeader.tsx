import Reveal from "./Reveal";

export default function SectionHeader({ index, title, sub }: { index: string; title: string; sub?: string }) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <div className="flex items-center gap-4">
        <span className="font-mono text-sm text-moss">{index}</span>
        <span className="h-px flex-1 bg-rule" />
      </div>
      <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {sub && <p className="mt-3 max-w-xl text-soft">{sub}</p>}
    </Reveal>
  );
}
