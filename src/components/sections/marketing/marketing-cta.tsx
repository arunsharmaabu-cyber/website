import CtaPanel from "@/components/ui/cta-panel";

// ───────── Copy for this section: edit the words here ─────────
export default function MarketingCta() {
  return (
    <CtaPanel
      label={{ n: "S/001", name: "Free audit" }}
      heading={["Not sure which", "one you need?"]}
      text="Start with the free audit. We tell you which of the seven to do first, with your real numbers."
      cta={{ label: "Get my free audit", href: "/contact#audit" }}
    />
  );
}
