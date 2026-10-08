// Dashed-divider row: mono label on the left, right-aligned control on the right.
export default function FieldRow({
  htmlFor,
  label,
  first = false,
  py = "py-4 md:py-[18px]",
  className = "",
  children,
}: {
  htmlFor: string;
  label: React.ReactNode;
  first?: boolean;
  py?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={`flex items-center justify-between gap-3 border-b border-dashed border-[#A9ACB4] md:gap-4 ${py} ${
        first ? "border-t" : ""
      } ${className}`}
    >
      <span className="font-mono text-[12px] uppercase tracking-[.1em]">{label}</span>
      {children}
    </label>
  );
}
