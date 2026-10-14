import ArrowSVG from "./arrow-svg";

// Full-width black button with an orange arrow.
export default function SolidButton({
  className = "",
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`flex w-full items-center justify-center gap-3 rounded-[4px] border-0 bg-ink text-[13px] font-medium uppercase tracking-[.14em] text-page cursor-pointer disabled:cursor-wait disabled:opacity-60 ${className}`}
      {...props}
    >
      {children}
      <ArrowSVG className="size-[18px]" />
    </button>
  );
}
