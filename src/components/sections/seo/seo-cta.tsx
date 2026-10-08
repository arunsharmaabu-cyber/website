import CtaPanel from "@/components/ui/cta-panel";

// ───────── Copy for this section: edit the words here ─────────
export default function SeoCta() {
  return (
    <CtaPanel
      label={{ n: "S/05", name: "Free audit" }}
      heading={["See where you", "rank today"]}
      text="The free audit shows your top searches and where you stand on each, with your real numbers."
      cta={{ label: "Get my free audit", href: "/contact#audit" }}
    />
  );
}
