import type { EnquiryStatus } from "./use-enquiry";

// The small message under a form's button. It is announced to screen readers when it changes.
export default function EnquiryStatusNote({ status, note, className = "" }: { status: EnquiryStatus; note: string; className?: string }) {
  return (
    <p
      role="status"
      aria-live="polite"
      className={`m-0 min-h-[1.25rem] text-[14px] leading-[1.4] ${status === "error" ? "text-[#B42318]" : "text-[#3A3C42]"} ${className}`}
    >
      {status === "sending" ? "Sending…" : note}
    </p>
  );
}

// A field no person sees. Bots tend to fill every field, so a filled one means "ignore this".
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label>
        Leave this empty
        <input type="text" name="hp" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}
