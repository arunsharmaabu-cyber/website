// "S/00x ——— Name" mono label with a dashed rule.
export default function SectionLabel({ number, name, className = "" }: { number: string; name: string; className?: string }) {
  return (
    <div className={`flex items-center gap-3 font-mono text-[12px] uppercase tracking-[.1em] md:gap-[14px] ${className}`}>
      <span>{number}</span>
      <span className="w-8 border-t border-dashed border-ink md:w-10" />
      <span>{name}</span>
    </div>
  );
}
