// Toggle pill (aria-pressed). Black when active, outlined when not.
export default function Pill({
  active,
  className = "",
  children,
  ...props
}: { active: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={`cursor-pointer rounded-full border text-[11px] uppercase tracking-[.1em] ${
        active ? "border-ink bg-ink text-page" : "border-[#A9ACB4] bg-transparent text-ink"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
