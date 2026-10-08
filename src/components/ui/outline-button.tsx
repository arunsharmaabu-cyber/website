import ArrowSVG from "./arrow-svg";

// Outlined link-button with an orange arrow. On hover/focus an orange fill slides in from the left
// and the text + arrow turn white. Size is set by the section via className.
export default function OutlineButton({
  href,
  className = "",
  children,
  ...rest
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">) {
  return (
    <a
      {...rest}
      href={href}
      className={`group relative flex items-center overflow-hidden rounded-[4px] border border-ink font-mono font-medium uppercase no-underline transition-colors duration-300 hover:text-white focus-visible:text-white ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -translate-x-full bg-accent transition-transform duration-300 ease-out group-hover:translate-x-0 group-focus-visible:translate-x-0"
      />
      <span className="relative z-10">{children}</span>
      <ArrowSVG className="relative z-10 size-[14px] transition-[stroke] duration-300 group-hover:stroke-white group-focus-visible:stroke-white md:size-4" />
    </a>
  );
}
