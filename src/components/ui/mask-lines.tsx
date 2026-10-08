// Headline split into lines; each line sits in a clipped box so the reveal animation can slide it up
// from behind the edge. The words themselves are passed in by the section file.
export default function MaskLines({
  lines,
  accent = false,
}: {
  lines: string[];
  accent?: boolean; // adds the orange full stop after the last line
}) {
  return (
    <>
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden pb-[.12em] [margin-bottom:-.12em]">
          <span data-line className="block">
            {l}
            {accent && i === lines.length - 1 && <span className="text-accent">.</span>}
          </span>
        </span>
      ))}
    </>
  );
}
