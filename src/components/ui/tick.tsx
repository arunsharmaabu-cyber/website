// Black circle with an orange check. Size the circle with className.
export default function Tick({ className = "" }: { className?: string }) {
  return (
    <span className={`flex flex-none items-center justify-center rounded-full bg-ink ${className}`} aria-hidden="true">
      <svg viewBox="0 0 18 18" fill="none" stroke="#FF4D00" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="size-[14px] md:size-[15px]">
        <path d="M3.5 9.5l3.5 3.5 7.5-8" />
      </svg>
    </span>
  );
}
