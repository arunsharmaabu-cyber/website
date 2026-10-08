// Native <details> accordion: keyboard accessible, works without JavaScript, first answer open.
export default function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div data-rise-group className="min-w-0 border-b border-dashed border-[#A9ACB4]">
      {faqs.map((f, i) => (
        <details key={f.q} open={i === 0} data-rise className="group border-t border-dashed border-[#A9ACB4]">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-[22px] [&::-webkit-details-marker]:hidden">
            <span className="text-[18px] font-medium leading-[1.25] tracking-[-0.025em] md:text-[22px]">{f.q}</span>
            <span className="flex size-[30px] flex-none items-center justify-center rounded-full border border-ink transition-transform duration-200 group-open:rotate-45">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#FF4D00" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <path d="M6 1v10M1 6h10" />
              </svg>
            </span>
          </summary>
          <p className="m-0 mb-6 max-w-[640px] text-[15px] leading-[1.55] text-[#3A3C42] md:text-[16px]">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
