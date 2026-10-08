import CtaPanel from "@/components/ui/cta-panel";

// ───────── Copy for this section: edit the words here ─────────
export default function WebCta() {
  return (
    <CtaPanel
      label={{ n: "S/05", name: "Free audit" }}
      heading={["A website that", "wins the call"]}
      text="Start with a free audit of your current site. We come back with real numbers and a plan."
      cta={{ label: "Get my free audit", href: "/contact#audit" }}
    />
  );
}
